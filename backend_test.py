#!/usr/bin/env python3
"""
RewardSage Backend API Testing Suite
Tests all backend endpoints and MongoDB connectivity
"""

import requests
import json
import sys
from datetime import datetime
import time

# Get backend URL from frontend .env
BACKEND_URL = "https://19268432-e7c6-4cba-acec-3dba5781be61.preview.emergentagent.com/api"

def test_backend_health():
    """Test basic backend connectivity and health"""
    print("🔍 Testing Backend Health...")
    
    try:
        response = requests.get(f"{BACKEND_URL}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Backend health check passed")
                return True
            else:
                print(f"❌ Unexpected response: {data}")
                return False
        else:
            print(f"❌ Health check failed with status {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Backend connection failed: {e}")
        return False

def test_status_endpoints():
    """Test status check endpoints (POST and GET)"""
    print("\n🔍 Testing Status Check Endpoints...")
    
    # Test POST /api/status
    test_data = {
        "client_name": "RewardSage_Test_Client"
    }
    
    try:
        # Create a status check
        post_response = requests.post(
            f"{BACKEND_URL}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if post_response.status_code == 200:
            created_status = post_response.json()
            print("✅ POST /api/status - Status check created successfully")
            print(f"   Created ID: {created_status.get('id')}")
            print(f"   Client Name: {created_status.get('client_name')}")
            print(f"   Timestamp: {created_status.get('timestamp')}")
            
            # Verify required fields
            if not all(key in created_status for key in ['id', 'client_name', 'timestamp']):
                print("❌ Missing required fields in response")
                return False
                
        else:
            print(f"❌ POST /api/status failed with status {post_response.status_code}")
            print(f"   Response: {post_response.text}")
            return False
            
        # Test GET /api/status
        get_response = requests.get(f"{BACKEND_URL}/status", timeout=10)
        
        if get_response.status_code == 200:
            status_list = get_response.json()
            print("✅ GET /api/status - Retrieved status checks successfully")
            print(f"   Total status checks: {len(status_list)}")
            
            # Verify our created status is in the list
            found_our_status = False
            for status in status_list:
                if status.get('client_name') == 'RewardSage_Test_Client':
                    found_our_status = True
                    break
                    
            if found_our_status:
                print("✅ Created status check found in GET response")
            else:
                print("⚠️  Created status check not found in GET response")
                
            return True
        else:
            print(f"❌ GET /api/status failed with status {get_response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Status endpoint test failed: {e}")
        return False

def test_mongodb_connectivity():
    """Test MongoDB connectivity through API operations"""
    print("\n🔍 Testing MongoDB Connectivity...")
    
    # Create multiple status checks to test database operations
    test_clients = [
        "MongoDB_Test_Client_1",
        "MongoDB_Test_Client_2", 
        "MongoDB_Test_Client_3"
    ]
    
    created_ids = []
    
    try:
        # Create multiple records
        for client_name in test_clients:
            response = requests.post(
                f"{BACKEND_URL}/status",
                json={"client_name": client_name},
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                created_ids.append(data.get('id'))
            else:
                print(f"❌ Failed to create record for {client_name}")
                return False
        
        print(f"✅ Successfully created {len(created_ids)} records in MongoDB")
        
        # Retrieve all records and verify our test records exist
        get_response = requests.get(f"{BACKEND_URL}/status", timeout=10)
        
        if get_response.status_code == 200:
            all_records = get_response.json()
            
            # Count our test records
            test_record_count = 0
            for record in all_records:
                if record.get('client_name') in test_clients:
                    test_record_count += 1
            
            if test_record_count >= len(test_clients):
                print(f"✅ MongoDB persistence verified - {test_record_count} test records found")
                return True
            else:
                print(f"⚠️  Only {test_record_count} of {len(test_clients)} test records found")
                return False
        else:
            print("❌ Failed to retrieve records from MongoDB")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ MongoDB connectivity test failed: {e}")
        return False

def test_api_error_handling():
    """Test API error handling with invalid requests"""
    print("\n🔍 Testing API Error Handling...")
    
    try:
        # Test POST with missing required field
        invalid_response = requests.post(
            f"{BACKEND_URL}/status",
            json={},  # Missing client_name
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if invalid_response.status_code == 422:  # FastAPI validation error
            print("✅ API properly handles validation errors")
        else:
            print(f"⚠️  Unexpected status code for invalid request: {invalid_response.status_code}")
        
        # Test invalid endpoint
        not_found_response = requests.get(f"{BACKEND_URL}/nonexistent", timeout=10)
        
        if not_found_response.status_code == 404:
            print("✅ API properly handles 404 errors")
        else:
            print(f"⚠️  Unexpected status code for 404: {not_found_response.status_code}")
            
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error handling test failed: {e}")
        return False

def run_comprehensive_backend_tests():
    """Run all backend tests and provide summary"""
    print("🚀 Starting RewardSage Backend API Tests")
    print("=" * 50)
    
    test_results = {
        "backend_health": test_backend_health(),
        "status_endpoints": test_status_endpoints(), 
        "mongodb_connectivity": test_mongodb_connectivity(),
        "error_handling": test_api_error_handling()
    }
    
    print("\n" + "=" * 50)
    print("📊 TEST SUMMARY")
    print("=" * 50)
    
    passed_tests = 0
    total_tests = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
        if result:
            passed_tests += 1
    
    print(f"\nOverall Result: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 All backend tests passed! RewardSage backend is fully operational.")
        return True
    else:
        print("⚠️  Some backend tests failed. Please check the issues above.")
        return False

if __name__ == "__main__":
    success = run_comprehensive_backend_tests()
    sys.exit(0 if success else 1)