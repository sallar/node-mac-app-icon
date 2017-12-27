#!/bin/bash

cd GetAppIcon
swift build --build-path ../.tmp --configuration=release -Xswiftc -static-stdlib
cd ..
cp .tmp/release/GetAppIcon ./run
rm -rf .tmp
