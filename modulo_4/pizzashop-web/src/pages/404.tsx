import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-5xl font-bold text-muted-foreground">404</h1>
      <h1 className="text-2xl font-bold text-muted-foreground">
        Pagina não encontrada
      </h1>
      <p className="text-accent-foreground">
        Voltar para{' '}
        <Link className="text-sky-500 dark:text-sky-600" to={'/'}>
          Home
        </Link>{' '}
      </p>
    </div>
  )
}
