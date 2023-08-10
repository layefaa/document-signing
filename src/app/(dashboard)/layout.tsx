import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})


export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div>

            </div>
            <div>
                <div></div>
                <div>
                    {children}
                </div>
            </div>

        </div>
    )
}
