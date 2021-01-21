git add .
echo "Code Staged"
git commit -m "commit at `date "+%Y%m%d-%H%M%S"`"
echo "Code Committed"
git push origin master
echo "Code Pushed"
npm run deploy
echo "App Deployed"
echo "https://likarajo.github.io/ml_projects"