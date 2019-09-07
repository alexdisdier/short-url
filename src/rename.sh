# I can choose multiple folders with {} and random depth levels with **
for file in client/{app,components}/**/*.js
do
  mv "$file" "${file%.js}.ts"
done