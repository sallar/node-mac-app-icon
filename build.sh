#!/bin/bash

cd GetAppIcon && swift build -c release --build-path ../.tmp && cd ..
mkdir dist
cp .tmp/release/GetAppIcon dist/
