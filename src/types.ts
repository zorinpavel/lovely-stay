export type UserDataType = {
    id: number,
    login: string,
    avatar_url: string,
    bio: string | null,
    email: string | null,
    name: string | null,
    public_repos: number,
};

export type ErrorType = {
    status: number,
    message?: string,
};

export type RepoDataType = {
    id: number,
    name: string,
    full_name: string,
    language: string,
    private: boolean,
    html_url: string,
    description: string | null,
};
