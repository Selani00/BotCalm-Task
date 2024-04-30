'use client'


export default function PostsPage({params}: { params: { id: string } }) {
    return (
        <div>
            <h1>User Id: {params.id}</h1>
            
        </div>
    )

}