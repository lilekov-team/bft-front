import {useCallback, useEffect} from "react";
import {useToast} from "@chakra-ui/react";








export const useCustomToast = () => {
    const toast = useToast()

    const showToast = useCallback((message: string, status: "error" | "info" | "warning" | "success", title: string) => {
      toast({
          title: title ? title : "Ошибка",
          description: message,
          position: "top-right",
          status: status ? status : "error",
          duration: 8000,
          isClosable: true,
  
      });
    },[toast])


    return showToast
}