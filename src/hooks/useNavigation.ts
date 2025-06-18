const useNavigation = () => {
    const navigateTo = (url: string) => {
        window.open(url, "_blank");
    };

    return { navigateTo };
};

export default useNavigation