#!/bin/bash

cd GetAppIcon && swift build -c release --build-path ../.tmp && cd ..
cp .tmp/release/GetAppIcon ./run
rm -rf .tmp
