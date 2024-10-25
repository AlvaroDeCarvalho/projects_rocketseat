import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInFormType = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormType>({ resolver: zodResolver(signInForm) })
  const handelSignIn = async (data: SignInFormType) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('enviamos um link de acesso para o seu e-mail.', {
        action: {
          label: 'Reenviar e-mail',
          onClick: () => handelSignIn(data),
        },
      })
    } catch (error) {
      console.log(error)
      toast.error('Erro ao fazer login')
    }
  }

  return (
    <>
      <Helmet title="Log-in" />
      <div className="p-8">
        <Button asChild variant={'ghost'} className="absolute right-4 top-8">
          <Link to={'/sign-up'}>Novo estabelecimento</Link>
        </Button>
        <div className="W-[320px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel{' '}
            </h1>
            <p className="text-sm text-muted-foreground">
              acompanhe suas vender pelo painel do parceiro
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handelSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email" {...register}>
                Seu e-mail
              </Label>
              <Input
                type="email"
                className="input"
                id="email"
                {...register('email')}
              />
            </div>
            <div>
              <Button className="w-full" disabled={isSubmitting}>
                Acessar painel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
