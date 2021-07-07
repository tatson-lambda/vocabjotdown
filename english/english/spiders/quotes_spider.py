import scrapy


class QuotesSpider(scrapy.Spider):
    name = "quotes"

    def start_requests(self):
        urls =[]
        for page in range(1, 3793):
            strU = 'https://www.english.com/gse/teacher-toolkit/user/api/v1/vocabulary/search?filters={"gseRange":{"from":"10","to":"90"},"topics":[],"audiences":["GL"],"grammaticalCategories":[]}&page=' + str(page) + '&query_string=*&sort=-expression.raw'
            print(strU)
            urls.append(strU)
    
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url.split("&")[-3]
        filename = f'quotes-{page}.html'
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log(f'Saved file {filename}')
        
       
       
