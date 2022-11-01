import { useEffect } from "react"
import Button from "components/button"
import { useStoreContext } from "context/StoreContext"
import { useRouter } from "next/router"

const WaitForAttacher = () => {
  const { ctcInfo, role } = useStoreContext()
  const router = useRouter()

  const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds))

  const copyToClipboard = async (button) => {
    navigator.clipboard.writeText(ctcInfo);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = "Copied!";
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }
  
  useEffect(() => {
    if (role !== 'deployer') router.push('/select-role')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role])

  return (
    <div className="">
      <p>Waiting for Attacher to join...</p>
      <br />
      <p>Please give them this contract info:</p>
      <pre className='bg-[rgba(255,255,255,0.3)] rounded-[10px] text-[18px] my-[30px] p-5 text-left'>
        {ctcInfo}
      </pre>
      <Button
        title="Copy to clipboard"
        handleClick={(e) => copyToClipboard(e.currentTarget)}
      />

    </div>)
}

export default WaitForAttacher