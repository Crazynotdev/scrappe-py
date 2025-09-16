from bs4 import beautifulSoup
import logging
def parse_html(html)
if not html return None
soup = beautifulSoup(html, "lxml")
titles = [h2.text.strip() for h2 in soup.find_all("h2")]
    logging.info(f"Parsed ${len(titles)} titles")
    return titles
