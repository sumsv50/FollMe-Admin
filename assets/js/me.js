const linkTitle = ['Số điện thoại', 'Facebook', 'Instagram', 'Email', 'Zalo', 'Youtube', 'Tiktok', 'Website', 'Youtube'];

const drdLink = document.querySelector('.drd-select-link');

const linkHtml = linkTitle.map(link => `<option value="${link}">${link}</option>`);
console.log(linkHtml);

drdLink.innerHTML = linkHtml.join(' ');