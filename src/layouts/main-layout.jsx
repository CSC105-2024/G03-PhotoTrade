import styles from "../style"

const MainLayout = ({ title, description, children }) => {
    return (
        <section className={`${styles.marginY}`}>
            <div>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='mt-2 text-neutral-500'>{description}</p>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}
export default MainLayout
