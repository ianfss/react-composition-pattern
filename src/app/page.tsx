import { Badge } from '@/components/Badge'

export default function Home() {
  return (
    <div className="select-none w-screen h-screen flex justify-center items-center gap-4">
      <Badge.Default>Default</Badge.Default>
      <Badge.Success>Success</Badge.Success>
      <Badge.Error>Error</Badge.Error>
      <Badge.Warning>Warning</Badge.Warning>
    </div>
  )
}
