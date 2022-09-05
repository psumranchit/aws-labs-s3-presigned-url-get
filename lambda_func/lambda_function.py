import json
import boto3
import os

def lambda_handler(event, context):
    
    bucket_name = os.environ['bucket']
    key_name = 'images/' + str(event['dino'])
    s3 = boto3.client('s3')
    
    URL = s3.generate_presigned_url(
        "get_object", Params={"Bucket": bucket_name, "Key": key_name}, ExpiresIn=30
    )
    return {
        'statusCode': 200,
        'URL': URL
    }
