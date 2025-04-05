import Header from "@/components/Header"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This is a sample page showing the header component in action.
        </p>
      </main>
    </div>
  )
}
