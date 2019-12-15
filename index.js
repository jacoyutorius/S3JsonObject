const S3Json = require('./libs/S3Json');

(async () => {
  const s3Json = new S3Json('hiroba-bucket', 'hiroba/hiroba_201912.json');
  const data = await s3Json.Data();
  console.log(data);
})();