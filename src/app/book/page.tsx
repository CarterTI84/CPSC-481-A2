type Props = {
    searchParams: {
        activity: string
    }
}
export default function BookActivity({ searchParams }: Props) {
    const { activity } = searchParams;

    return (
        <div>page</div>
    )
}