{/* @ts-expect-error Async Server Component */}
export default async function NotFound({children}):Promise<Element>{
    return (
        <div>
            빠른 시일 내에 오픈 예정입니다!
            {children}</div>
    );
}