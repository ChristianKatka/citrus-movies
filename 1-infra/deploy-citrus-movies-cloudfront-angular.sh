#!/usr/bin/env bash
set -e 

REGION="eu-west-1"
TEMPLATE_FILE="./cloudfront/citrus-movies-cloudfront-angular.yaml"
STACK_NAME="citrus-movies-cloudfront-angular"

aws cloudformation deploy \
  --stack-name "$STACK_NAME"  \
  --template-file "${TEMPLATE_FILE}" \
  --region "$REGION"
