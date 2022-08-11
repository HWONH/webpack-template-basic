module.exports = {
    presets: ['@babel/preset-env'], // 자바스크립트 기능 지원 패키지
    plugins: [
        ['@babel/plugin-transform-runtime'] // 비동기 처리 지원 패키지
    ]
}