// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">前言</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.</strong> 变量与数据类型</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch01/dartpl0101.html"><strong aria-hidden="true">1.1.</strong> Hello Dart: 搭建开发环境</a></li><li class="chapter-item expanded "><a href="ch01/dartpl0102.html"><strong aria-hidden="true">1.2.</strong> 变量与Null safety</a></li><li class="chapter-item expanded "><a href="ch01/dartpl0103.html"><strong aria-hidden="true">1.3.</strong> final、const 及wildcard</a></li><li class="chapter-item expanded "><a href="ch01/dartpl0104.html"><strong aria-hidden="true">1.4.</strong> 数据类型</a></li><li class="chapter-item expanded "><a href="ch01/dartpl0105.html"><strong aria-hidden="true">1.5.</strong> 操作符</a></li><li class="chapter-item expanded "><a href="ch01/dartpl0106.html"><strong aria-hidden="true">1.6.</strong> 注释</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> 控制流与函数</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch02/dartpl0201.html"><strong aria-hidden="true">2.1.</strong> if 与 switch 语句</a></li><li class="chapter-item expanded "><a href="ch02/dartpl0202.html"><strong aria-hidden="true">2.2.</strong> for 与 while 循环</a></li><li class="chapter-item expanded "><a href="ch02/dartpl0203.html"><strong aria-hidden="true">2.3.</strong> 断言</a></li><li class="chapter-item expanded "><a href="ch02/dartpl0204.html"><strong aria-hidden="true">2.4.</strong> 函数</a></li><li class="chapter-item expanded "><a href="ch02/dartpl0205.html"><strong aria-hidden="true">2.5.</strong> 函数参数</a></li><li class="chapter-item expanded "><a href="ch02/dartpl0206.html"><strong aria-hidden="true">2.6.</strong> 函数类型、匿名函数与闭包</a></li><li class="chapter-item expanded "><a href="ch02/dartpl0207.html"><strong aria-hidden="true">2.7.</strong> 递归</a></li><li class="chapter-item expanded "><a href="ch02/dartpl0208.html"><strong aria-hidden="true">2.8.</strong> 异常处理 </a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 模式 Pattern</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch03/dartpl0301.html"><strong aria-hidden="true">3.1.</strong> 模式简介</a></li><li class="chapter-item expanded "><a href="ch03/dartpl0302.html"><strong aria-hidden="true">3.2.</strong> 使用场景</a></li><li class="chapter-item expanded "><a href="ch03/dartpl0303.html"><strong aria-hidden="true">3.3.</strong> 模式类型</a></li><li class="chapter-item expanded "><a href="ch03/dartpl0304.html"><strong aria-hidden="true">3.4.</strong> 应用案例</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 类</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch04/dartpl0401.html"><strong aria-hidden="true">4.1.</strong> 封装与可见性</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0402.html"><strong aria-hidden="true">4.2.</strong> 构造函数、this关键字与初始化列表</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0403.html"><strong aria-hidden="true">4.3.</strong> 命名构造器</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0404.html"><strong aria-hidden="true">4.4.</strong> 重定向构造器</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0405.html"><strong aria-hidden="true">4.5.</strong> factory构造器</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0406.html"><strong aria-hidden="true">4.6.</strong> 使用late延迟初始化</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0407.html"><strong aria-hidden="true">4.7.</strong> const构造器与const变量</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0408.html"><strong aria-hidden="true">4.8.</strong> getter 与 setter 方法</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0409.html"><strong aria-hidden="true">4.9.</strong> 操作符重载</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0410.html"><strong aria-hidden="true">4.10.</strong> callable 类</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0411.html"><strong aria-hidden="true">4.11.</strong> 枚举</a></li><li class="chapter-item expanded "><a href="ch04/dartpl0412.html"><strong aria-hidden="true">4.12.</strong> 注解</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 类的继承与扩展</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch05/dartpl0501.html"><strong aria-hidden="true">5.1.</strong> super构造器</a></li><li class="chapter-item expanded "><a href="ch05/dartpl0502.html"><strong aria-hidden="true">5.2.</strong> 抽象类</a></li><li class="chapter-item expanded "><a href="ch05/dartpl0503.html"><strong aria-hidden="true">5.3.</strong> 接口与implements关键字</a></li><li class="chapter-item expanded "><a href="ch05/dartpl0504.html"><strong aria-hidden="true">5.4.</strong> 使用Mixin创建可复用代码</a></li><li class="chapter-item expanded "><a href="ch05/dartpl0505.html"><strong aria-hidden="true">5.5.</strong> 使用extension扩展已有的类</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 集合与泛型</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch06/dartpl0601.html"><strong aria-hidden="true">6.1.</strong> 泛型</a></li><li class="chapter-item expanded "><a href="ch06/dartpl0602.html"><strong aria-hidden="true">6.2.</strong> 列表 List</a></li><li class="chapter-item expanded "><a href="ch06/dartpl0603.html"><strong aria-hidden="true">6.3.</strong> 集合 Set</a></li><li class="chapter-item expanded "><a href="ch06/dartpl0604.html"><strong aria-hidden="true">6.4.</strong> 使用 Map 创建&quot;键值对&quot;集合</a></li><li class="chapter-item expanded "><a href="ch06/dartpl0605.html"><strong aria-hidden="true">6.5.</strong> hashCode 与equals (==操作符)</a></li><li class="chapter-item expanded "><a href="ch06/dartpl0606.html"><strong aria-hidden="true">6.6.</strong> Transform方法</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 异步编程</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch07/dartpl0701.html"><strong aria-hidden="true">7.1.</strong> Future、async 与 await</a></li><li class="chapter-item expanded "><a href="ch07/dartpl0702.html"><strong aria-hidden="true">7.2.</strong> Iterable 、Stream 、sync*、 async* 与 yield</a></li><li class="chapter-item expanded "><a href="ch07/dartpl0703.html"><strong aria-hidden="true">7.3.</strong> Stream命名构造器</a></li><li class="chapter-item expanded "><a href="ch07/dartpl0704.html"><strong aria-hidden="true">7.4.</strong> 使用listen()/await for 订阅 Stream</a></li><li class="chapter-item expanded "><a href="ch07/dartpl0705.html"><strong aria-hidden="true">7.5.</strong> Isolate介绍</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 单元测试</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ch08/dartpl0801.html"><strong aria-hidden="true">8.1.</strong> test/group</a></li><li class="chapter-item expanded "><a href="ch08/dartpl0802.html"><strong aria-hidden="true">8.2.</strong> 测试异步代码</a></li><li class="chapter-item expanded "><a href="ch08/dartpl0803.html"><strong aria-hidden="true">8.3.</strong> 使用mockito模拟外部依赖</a></li></ol></li><li class="chapter-item expanded "><div>附录</div></li><li class="chapter-item expanded affix "><a href="ch0a/dartpl0a.html">A  dart命令行工具</a></li><li class="chapter-item expanded affix "><a href="ch0a/dartpl0b.html">B  SOLID编码准则</a></li><li class="chapter-item expanded affix "><a href="ch0a/dartpl0c.html">C  编写Dart命令行程序</a></li><li class="chapter-item expanded affix "><a href="ch0a/dartpl0d.html">D  编写Dart服务端编程</a></li><li class="chapter-item expanded affix "><a href="ch0a/dartpl0e.html">E  Dart 常用package介绍</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
