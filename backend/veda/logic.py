import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qsl, urlencode, urlunparse
import json
import os

basic_url= 'https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&nso=&mode=normal&main_q=&optionType=&view_month=&episode_no=&st_coll=&topic_r_cat='

parts = urlparse(basic_url)

qs = dict(parse_qsl(parts.query))

new_query="해운대맛집"

qs['query']= new_query

parts = parts._replace(query=urlencode(qs))

new_url = urlunparse(parts)

print(new_url)
req = requests.get(new_url)

html = req.text

soup = BeautifulSoup(html, 'html.parser')

pkg_list=soup.find_all("a",{"class":"total_tit"})

data = {}
count = 1
for title in pkg_list:
    data[count]=title.get('href')
    count=count+1

print(data.items())
print(type(data))

with open(os.path.join("",'result.json'),'w+') as json_file:
    json.dump(data, json_file, indent='\t')
