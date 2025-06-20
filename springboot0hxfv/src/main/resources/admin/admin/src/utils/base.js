const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot0hxfv/",
            name: "springboot0hxfv",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot0hxfv/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线小说阅读平台"
        } 
    }
}
export default base
