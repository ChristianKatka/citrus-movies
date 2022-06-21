#!/usr/bin/env bash
set -e 

REGION="eu-west-1"
TEMPLATE_FILE="./s3/citrus-movies-s3-bucket-API-lambda.yaml"
STACK_NAME="citrus-movies-s3-bucket-API-lambda"

aws cloudformation deploy \
  --stack-name "$STACK_NAME"  \
  --template-file "${TEMPLATE_FILE}" \
  --region "$REGION"
