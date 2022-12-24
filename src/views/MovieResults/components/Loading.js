const Loading = () => {
    return(
        <div className="flex items-center justify-center flex-col h-full">
            <div className="w-16 h-16 border-4 border-red-400 border-solid rounded-full animate-spin" style={{borderTopColor: "transparent"}}></div>
            <p className="mt-3">Buscando película..</p>
        </div>
    )
}

export default Loading;