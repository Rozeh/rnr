import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qsl, urlencode, urlunparse
import json

    def post_log(new_query, target_post_url);

        basic_url= 'https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&nso=&mode=normal&main_q=&optionType=&view_month=&episode_no=&st_coll=&topic_r_cat='

        parts = urlparse(basic_url)

        qs = dict(parse_qsl(parts.query))

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

        search_url = target_post_url

        for num, url in data.items():
            if url == search_url:
                rank = num
            elif:
                rank is None
