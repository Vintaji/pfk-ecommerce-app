echo 'Starting'
cd PFK/pfk-ecommerce-api
git pull
pm2 restart APPOnline
echo 'Finishing'
