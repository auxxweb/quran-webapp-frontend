import styles from './Login.module.css';

function LoginPage() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    Flowbite    
                </a>
                <div className={styles.card}>
                    <div className={styles.card_header}>
                        <h1 className={styles.card_title}>
                            Sign in to your account
                        </h1>
                        <form className={styles.form} action="#">
                            <div>
                                <label htmlFor="email" className={styles.label}>Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={styles.input}
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className={styles.label}>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className={styles.input}
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className={styles.checkbox}>
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className={styles.checkbox_input}
                                            required
                                        />
                                    </div>
                                    <div className={styles.checkbox_label}>
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className={styles.submit_button}>
                                Sign in
                            </button>
                            <p className={styles.footer_text}>
                                Don’t have an account yet? 
                                <a href="#" className={styles.footer_link}>Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
