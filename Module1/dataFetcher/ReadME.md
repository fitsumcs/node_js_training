# Exerscie  
Create a reusable, type-safe data fetching utility that handles HTTP requests, implements retry logic with exponential backoff, and provides comprehensive error handling. This is a common pattern you'll use in real-world applications.

1. Type Definitions
Create interfaces for request config, response, and errors

2. Generic Fetch Function
Write fetchData that returns typed responses

3. Retry Logic
Implement exponential backoff (1s, 2s, 4s) with max 3 retries

4. Error Handling
Distinguish network errors, HTTP errors, and timeout errors

## Example 
// types/fetcher.ts
 interface FetchConfig { url: string; method?: 'GET' | 'POST'; headers?: Record; body?: unknown; timeout?: number; retries?: number; }
 interface FetchResponse { success: boolean; data?: T; error?: FetchError; }
 interface FetchError { type: 'network' | 'http' | 'timeout'; message: string; statusCode?: number; } 
// TODO: Implement fetchData function // with retry logic and error handling


## Bonus Challenges
Add request/response interceptors
Implement request deduplication
Add request cancellation with AbortController
Create a caching mechanism