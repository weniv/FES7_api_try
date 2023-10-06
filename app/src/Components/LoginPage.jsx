function LoginPage() {
    return(
        <>
            <h1>로그인</h1>
            <section>
                <h2>이메일, 비밀번호 입력하는곳</h2>
                <form>
                    <input type="text" placeholder="이메일입력" />
                    <input type="text" placeholder="비밀번호입력"/>
                    <button>로그인</button>
                </form>
            </section>
        </>
    )
}

export default LoginPage