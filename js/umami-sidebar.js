document.addEventListener('DOMContentLoaded', function() {
    // 等待侧边栏加载完成
    const aside = document.querySelector('.aside-content');
    if (!aside) return;

    // 防止重复插入
    if (document.querySelector('.umami-widget')) return;

    // 创建卡片容器
    const widget = document.createElement('div');
    widget.className = 'card-widget umami-widget';
	widget.style.marginTop = '20px';   // 增加这一行
    widget.innerHTML = `
        <div class="card-content">
            <div class="item-headline">
                <i class="fas fa-chart-line"></i>
                <span>网站统计</span>
            </div>
            <iframe src="https://cloud.umami.is/share/E9U6YevLT42aYa0K" 
                    style="border:0; width:100%; height:300px; margin-top:10px;"></iframe>
        </div>
    `;
    
    // 将卡片添加到侧边栏最下方（您也可以调整插入位置）
    aside.appendChild(widget);
});