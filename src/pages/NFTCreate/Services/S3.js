import aws from 'aws-sdk'
import {randomBytes} from 'crypto'
import { promisify } from "util"

// const randomBytes = promisify(crypto.randomBytes)

const region = "eu-north-1"
const bucketName = "nft-tickets-bucket"
const accessKeyId = "AKIAQVSQ2ZQW6WWZDZGD"
const secretAccessKey = "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"

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})

export async function generateUploadURL() {
  const imageName ="balls";

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  })
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}