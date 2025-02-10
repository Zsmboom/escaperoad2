// 定义全局分享函数
window.getShareData = function() {
    const title = document.title;
    const url = window.location.href;
    const description = document.querySelector('meta[name="description"]')?.content || '';
    return { title, url, description };
}

window.shareOnTwitter = function() {
    const { title, url } = window.getShareData();
    const shareText = encodeURIComponent(`${title}\n`);
    const shareUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=550,height=420');
    return false;
}

window.shareOnFacebook = function() {
    const { url } = window.getShareData();
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=550,height=420');
    return false;
}

window.shareOnLinkedIn = function() {
    const { title, url, description } = window.getShareData();
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=550,height=420');
    return false;
} 