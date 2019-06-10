#!/bin/bash
cd server && docker-compose up -d
cd ../app && docker-compose up -d
