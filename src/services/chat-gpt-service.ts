export const callChatGPTCompletion = async (prompt: string, max_tokens: number = 3072): Promise<string> => {
    let result = '';
    const GPT_API_KEY = '';

    try {
        const response = await fetch('/chatapi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GPT_API_KEY}`
            },
            body: JSON.stringify({
                prompt,
                max_tokens: max_tokens,
                temperature: 0.3,
                model: "text-davinci-003",
            })
        });

        const json = await response.json();
        const choices = json['choices'];

        if (choices?.length > 0) {
            result = choices[0]?.text?.trim() || '';        }
    } catch(err) {
        console.log(err);
    }

    return result;
}