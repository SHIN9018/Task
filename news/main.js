document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('search').value.trim();
    if (query === "") {
        alert("검색어를 입력해주세요.");
        return;
    }

    const apiKey = "fa9fdbb1c0d747ed8ab2bcc2d7d177f9";
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! 상태: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.status !== "ok") {
                throw new Error(`API 에러: ${data.message}`);
            }
            displayResults(data.articles);
        })
        .catch(error => {
            console.error('에러 발생:', error);
            alert('뉴스를 불러오는 중에 문제가 발생했습니다.');
        });
});

function displayResults(articles) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (articles.length === 0) {
        resultDiv.innerHTML = '<p>검색 결과가 없습니다.</p>';
        return;
    }

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        const title = document.createElement('a');
        title.href = article.url;
        title.target = '_blank';
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description || '설명이 없습니다.';

        newsItem.appendChild(title);
        newsItem.appendChild(description);
        resultDiv.appendChild(newsItem);
    });
}