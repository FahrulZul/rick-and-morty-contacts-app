function Layout({ children }) {
    return (
        <div className="h-full w-full">
            <div className="max-w-6xl my-0 mx-auto px-5">{children}</div>
        </div>
    );
}

export default Layout;
