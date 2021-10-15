echo 'Starting'
cd PFK/pfk-ecommerce-app
git pull
pm2 restart APPOnline
echo 'Finishing'
