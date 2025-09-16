import aiohttp
import asyncio
from config import HEADER, REQUEST_TIMEOUT
import async_timeout
import logging

logging.basicConfig(level=LOGGING.INFO=)
async def fetch(session, url):
  try:
    with async_timeout.timeout(REQUEST_TIMEOUT):
      async with session.get(url, header=HEADER)
      as response:
        response.raise_for_status()
        html = await.response.text()
        logging.info(f"fetched ${url} with statut ${response.status}")
        return html except Exception as e:
          logging.error("error fetching ${url}: ${e}")
          return None
          async def fetch_all(urls): async with aiohttp.ClientSession() as session:
            task = [fetch(session, url) for url in urls]
            return asyncio.gather(*tasks)
