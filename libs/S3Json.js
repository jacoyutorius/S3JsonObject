const AWS = require('aws-sdk');

module.exports = class S3Json {
  constructor(bucket, key) {
    this.bucket = bucket;
    this.key = key;

    AWS.config.update({
      region: 'ap-northeast-1'
    });
    this.s3 = new AWS.S3({
      apiVersion: '2006-03-01'
    });
  }

  async Data() {
    const s3_object = await this.s3.getObject({
      Bucket: this.bucket,
      Key: this.key
    }).promise().catch(e => {
      console.error(e);
    });

    const json = JSON.parse(s3_object ? s3_object.Body.toString() : null)
    return json;
  }
}