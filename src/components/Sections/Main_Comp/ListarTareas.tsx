
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    FormControl,
    FormDescription,
    FormLabel,
} from "@/components/ui/form"

export const ListarTareas = () => {
    return (
        <form >
            <div className="flex flex-row items-start space-x-3 rounded-md border p-4 shadow">
                <FormControl>
                    <Checkbox />
                </FormControl>
                <div className="space-y-1 leading-none">
                    <FormLabel htmlFor="mobile" className="font-normal">
                        Use different settings for my mobile devices
                    </FormLabel>
                    <FormDescription>
                        You can manage your mobile notifications in the{" "}

                    </FormDescription>
                </div>
            </div>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </Button>
        </form>
    );
}

