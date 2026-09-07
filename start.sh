#!/bin/bash
# Start FeedbackFlow + Portfolio locally
cd "$(dirname "$0")"
PORT=8080
echo ""
echo "  FeedbackFlow APM Portfolio"
echo "  =========================="
echo ""
echo "  Product:   http://localhost:$PORT/feedbackflow/"
echo "  Portfolio: http://localhost:$PORT/portfolio/"
echo ""
echo "  Press Ctrl+C to stop."
echo ""
python3 -m http.server "$PORT"
