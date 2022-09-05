# aws-labs-s3-presigned-url-get
## Step 1
### Provision resources using CloudFormation template. Following resources will be created
- 2 S3-Buckets. One for hosting frontend page. Another for storing images
- Lambda function for generating presigned url for frontend to display images
- Lambda Execution Role. Lambda needs `s3:GetObject` permission on images bucket which already configured during resource creation
- REST API

## Step 2
### Upload frontend code to S3 Website Bucket
- Get API Invoke URL from CloudFormation `Output` and paste into `./html/js/api.js`
- Upload `index.html`, `./css/style.css` and `./js/api.js` to root folder of S3 Website Bucket
- Enjoy the dinos
