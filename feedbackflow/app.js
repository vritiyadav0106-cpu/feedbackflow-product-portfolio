/**
 * FeedbackFlow — Application Logic
 * =================================
 * This file handles all product behavior: saving data, RICE scoring, and updating the UI.
 *
 * PM reading guide:
 * 1. Start at `state` — what data we store
 * 2. Read `calculateRiceScore` — core business rule from PRD
 * 3. Read `addFeedback` and `promoteToFeature` — main user loop
 * 4. Skim `render*` functions — how the screen updates
 */

const STORAGE_KEY = 'feedbackflow_data';

// All app data lives in this single object (see docs/08-technical-overview-for-pms.md)
let state = {
  feedback: [],
  features: [],
  seeded: false
};

// --- Utility helpers ---

function generateId(prefix) {
  return prefix + '_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace('-', ' ');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// --- Persistence (localStorage) ---

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      state = JSON.parse(raw);
    } catch (e) {
      console.warn('Could not load saved data, starting fresh.');
      state = { feedback: [], features: [], seeded: false };
    }
  }
}

// --- RICE scoring (PRD Section 5) ---

/**
 * RICE = (Reach × Impact × Confidence) / Effort
 * @param {number} reach - 1 to 10
 * @param {number} impact - 0.25, 0.5, 1, 2, or 3
 * @param {number} confidence - 0 to 100 (percentage)
 * @param {number} effort - person-weeks, minimum 0.5
 * @returns {number|null} score or null if invalid
 */
function calculateRiceScore(reach, impact, confidence, effort) {
  if (!reach || !impact || confidence === '' || !effort || effort < 0.5) {
    return null;
  }
  const confidenceDecimal = confidence / 100;
  return (reach * impact * confidenceDecimal) / effort;
}

function isFeatureScored(feature) {
  return feature.riceScore !== null && feature.riceScore !== undefined && !isNaN(feature.riceScore);
}

// --- Core actions ---

function addFeedback(text, source, submitterType) {
  const trimmed = text.trim();
  if (trimmed.length < 10) {
    showToast('Feedback must be at least 10 characters.');
    return false;
  }

  const item = {
    id: generateId('fb'),
    text: trimmed,
    source: source,
    submitterType: submitterType,
    createdAt: new Date().toISOString(),
    promoted: false
  };

  state.feedback.unshift(item);
  saveState();
  renderInbox();
  renderDashboard();
  showToast('Feedback added to inbox.');
  return true;
}

function deleteFeedback(id) {
  state.feedback = state.feedback.filter(f => f.id !== id);
  saveState();
  renderInbox();
  renderDashboard();
  showToast('Feedback deleted.');
}

function promoteToFeature(feedbackId) {
  const feedback = state.feedback.find(f => f.id === feedbackId);
  if (!feedback) return;

  if (feedback.promoted) {
    showToast('This feedback was already promoted.');
    return;
  }

  const existing = state.features.find(f => f.feedbackId === feedbackId);
  if (existing) {
    showToast('Feature already exists for this feedback.');
    return;
  }

  const title = feedback.text.length > 60
    ? feedback.text.slice(0, 57) + '...'
    : feedback.text;

  const feature = {
    id: generateId('ft'),
    title: title,
    description: feedback.text,
    feedbackId: feedbackId,
    reach: 5,
    impact: 1,
    confidence: 80,
    effort: 2,
    riceScore: calculateRiceScore(5, 1, 80, 2),
    status: 'idea',
    createdAt: new Date().toISOString()
  };

  state.features.push(feature);
  feedback.promoted = true;
  saveState();
  renderInbox();
  renderBacklog();
  renderDashboard();
  showToast('Promoted to feature backlog. Adjust RICE scores in Backlog.');
}

function updateFeatureRice(featureId, field, value) {
  const feature = state.features.find(f => f.id === featureId);
  if (!feature) return;

  if (field === 'reach') feature.reach = Math.min(10, Math.max(1, Number(value)));
  if (field === 'impact') feature.impact = Number(value);
  if (field === 'confidence') feature.confidence = Math.min(100, Math.max(0, Number(value)));
  if (field === 'effort') feature.effort = Math.max(0.5, Number(value));

  feature.riceScore = calculateRiceScore(
    feature.reach,
    feature.impact,
    feature.confidence,
    feature.effort
  );

  saveState();
  renderBacklog();
  renderDashboard();
}

function deleteFeature(id) {
  const feature = state.features.find(f => f.id === id);
  if (feature && feature.feedbackId) {
    const feedback = state.feedback.find(f => f.id === feature.feedbackId);
    if (feedback) feedback.promoted = false;
  }
  state.features = state.features.filter(f => f.id !== id);
  saveState();
  renderBacklog();
  renderInbox();
  renderDashboard();
  showToast('Feature removed.');
}

// --- Rendering ---

function renderDashboard() {
  const statsGrid = document.getElementById('stats-grid');
  const sourceBreakdown = document.getElementById('source-breakdown');

  const feedbackCount = state.feedback.length;
  const featureCount = state.features.length;
  const scored = state.features.filter(isFeatureScored).sort((a, b) => b.riceScore - a.riceScore);
  const topFeature = scored[0];

  statsGrid.innerHTML = `
    <div class="stat-card">
      <div class="stat-label">Total feedback</div>
      <div class="stat-value">${feedbackCount}</div>
      <div class="stat-sub">Items in inbox</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Feature ideas</div>
      <div class="stat-value">${featureCount}</div>
      <div class="stat-sub">In backlog</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Top priority</div>
      <div class="stat-value" style="font-size:1.1rem;line-height:1.3">
        ${topFeature ? topFeature.title : '—'}
      </div>
      <div class="stat-sub">${topFeature ? 'RICE: ' + topFeature.riceScore.toFixed(2) : 'Score features in Backlog'}</div>
    </div>
  `;

  const sources = ['support', 'sales', 'interview', 'social', 'other'];
  const maxCount = Math.max(1, ...sources.map(s =>
    state.feedback.filter(f => f.source === s).length
  ));

  if (feedbackCount === 0) {
    sourceBreakdown.innerHTML = '<p class="empty-state">No feedback yet. Add items in the Inbox.</p>';
    return;
  }

  sourceBreakdown.innerHTML = sources.map(source => {
    const count = state.feedback.filter(f => f.source === source).length;
    const width = (count / maxCount) * 100;
    return `
      <div class="source-row">
        <span class="source-label">${capitalize(source)}</span>
        <div class="source-bar-bg">
          <div class="source-bar-fill" style="width:${width}%"></div>
        </div>
        <span class="source-count">${count}</span>
      </div>
    `;
  }).join('');
}

function renderInbox() {
  const list = document.getElementById('inbox-list');
  const countEl = document.getElementById('inbox-count');
  countEl.textContent = state.feedback.length;

  if (state.feedback.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <strong>Your inbox is empty</strong>
        Add feedback from support tickets, sales calls, or user interviews above.
      </div>
    `;
    return;
  }

  list.innerHTML = state.feedback.map(item => `
    <article class="feedback-item" data-id="${item.id}">
      <div class="feedback-meta">
        <span class="source-badge ${item.source}">${item.source}</span>
        <span class="source-badge">${item.submitterType}</span>
        ${item.promoted ? '<span class="promoted-label">✓ In backlog</span>' : ''}
        <span class="feedback-date">${formatDate(item.createdAt)}</span>
      </div>
      <p class="feedback-text">${escapeHtml(item.text)}</p>
      <div class="feedback-actions">
        ${!item.promoted
          ? `<button class="btn btn-primary btn-sm" onclick="promoteToFeature('${item.id}')">Promote to feature</button>`
          : ''}
        <button class="btn btn-danger" onclick="deleteFeedback('${item.id}')">Delete</button>
      </div>
    </article>
  `).join('');
}

function renderBacklog() {
  const list = document.getElementById('backlog-list');

  if (state.features.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <strong>No features yet</strong>
        Go to Inbox and promote feedback to create feature ideas, then score them here.
      </div>
    `;
    return;
  }

  const sorted = [...state.features].sort((a, b) => {
    const aScored = isFeatureScored(a);
    const bScored = isFeatureScored(b);
    if (aScored && !bScored) return -1;
    if (!aScored && bScored) return 1;
    if (!aScored && !bScored) return 0;
    return b.riceScore - a.riceScore;
  });

  list.innerHTML = sorted.map((feature, index) => `
    <article class="feature-card" data-id="${feature.id}">
      <div class="feature-header">
        <div>
          <div class="feature-title">#${index + 1} ${escapeHtml(feature.title)}</div>
          <div class="feature-desc">${escapeHtml(feature.description)}</div>
        </div>
        <span class="score-badge ${isFeatureScored(feature) ? '' : 'unscored'}">
          ${isFeatureScored(feature) ? feature.riceScore.toFixed(2) : 'Needs scoring'}
        </span>
      </div>
      <div class="rice-grid">
        <div class="rice-field">
          <label>Reach (1–10)</label>
          <input type="number" min="1" max="10" value="${feature.reach}"
            onchange="updateFeatureRice('${feature.id}', 'reach', this.value)">
        </div>
        <div class="rice-field">
          <label>Impact</label>
          <select onchange="updateFeatureRice('${feature.id}', 'impact', this.value)">
            <option value="0.25" ${feature.impact == 0.25 ? 'selected' : ''}>0.25 — Minimal</option>
            <option value="0.5" ${feature.impact == 0.5 ? 'selected' : ''}>0.5 — Low</option>
            <option value="1" ${feature.impact == 1 ? 'selected' : ''}>1 — Medium</option>
            <option value="2" ${feature.impact == 2 ? 'selected' : ''}>2 — High</option>
            <option value="3" ${feature.impact == 3 ? 'selected' : ''}>3 — Massive</option>
          </select>
        </div>
        <div class="rice-field">
          <label>Confidence (%)</label>
          <input type="number" min="0" max="100" value="${feature.confidence}"
            onchange="updateFeatureRice('${feature.id}', 'confidence', this.value)">
        </div>
        <div class="rice-field">
          <label>Effort (person-wks)</label>
          <input type="number" min="0.5" step="0.5" value="${feature.effort}"
            onchange="updateFeatureRice('${feature.id}', 'effort', this.value)">
        </div>
      </div>
      <div class="feature-footer">
        <span style="font-size:0.8rem;color:var(--text-muted)">Status: ${feature.status}</span>
        <button class="btn btn-danger btn-sm" onclick="deleteFeature('${feature.id}')">Remove</button>
      </div>
    </article>
  `).join('');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// --- Tab navigation ---

function switchTab(tabName) {
  document.querySelectorAll('.tab').forEach(tab => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive);
  });

  document.querySelectorAll('.panel').forEach(panel => {
    const isActive = panel.id === 'panel-' + tabName;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });
}

// --- Demo seed data (for portfolio interviews) ---

function seedDemoData() {
  if (state.seeded || state.feedback.length > 0) return;

  const demoFeedback = [
    { text: 'Users keep requesting bulk CSV export from the analytics dashboard. Support gets 3–4 tickets per week.', source: 'support', submitterType: 'end-user' },
    { text: 'Enterprise prospect will not sign without SSO (SAML). Deal size ~$40k ARR.', source: 'sales', submitterType: 'prospect' },
    { text: 'During interviews, power users want keyboard shortcuts for common actions.', source: 'interview', submitterType: 'end-user' },
    { text: 'Twitter thread with 200+ likes asking for dark mode.', source: 'social', submitterType: 'end-user' },
    { text: 'Internal CS team wants a way to tag duplicate feedback automatically.', source: 'other', submitterType: 'internal' },
    { text: 'Mobile web experience feels cramped on the settings page.', source: 'support', submitterType: 'end-user' }
  ];

  demoFeedback.forEach((item, i) => {
    state.feedback.push({
      id: generateId('fb'),
      text: item.text,
      source: item.source,
      submitterType: item.submitterType,
      createdAt: new Date(Date.now() - i * 86400000).toISOString(),
      promoted: false
    });
  });

  // Promote first three and score them for a realistic demo
  const toPromote = state.feedback.slice(0, 3);
  const riceValues = [
    { reach: 8, impact: 2, confidence: 80, effort: 3 },
    { reach: 3, impact: 3, confidence: 90, effort: 6 },
    { reach: 5, impact: 0.5, confidence: 70, effort: 1.5 }
  ];

  toPromote.forEach((fb, i) => {
    fb.promoted = true;
    const rv = riceValues[i];
    const score = calculateRiceScore(rv.reach, rv.impact, rv.confidence, rv.effort);
    state.features.push({
      id: generateId('ft'),
      title: fb.text.slice(0, 57) + (fb.text.length > 60 ? '...' : ''),
      description: fb.text,
      feedbackId: fb.id,
      reach: rv.reach,
      impact: rv.impact,
      confidence: rv.confidence,
      effort: rv.effort,
      riceScore: score,
      status: 'idea',
      createdAt: new Date().toISOString()
    });
  });

  state.seeded = true;
  saveState();
}

// --- Initialize app ---

function init() {
  loadState();
  seedDemoData();

  document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const text = document.getElementById('feedback-text').value;
    const source = document.getElementById('feedback-source').value;
    const submitter = document.getElementById('feedback-submitter').value;
    if (addFeedback(text, source, submitter)) {
      this.reset();
    }
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  renderDashboard();
  renderInbox();
  renderBacklog();
}

document.addEventListener('DOMContentLoaded', init);
