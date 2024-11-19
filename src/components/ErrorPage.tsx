import { Card, Button } from 'flowbite-react';
import { FormattedMessage } from 'react-intl';

function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <FormattedMessage id="error.title" defaultMessage={'Error 404'} />
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <FormattedMessage
                        id="error.message"
                        defaultMessage={'Sorry, the page you are looking for does not exist.'}
                    />
                </p>
                <Button>
                    <FormattedMessage id="error.button" defaultMessage={'Go back to home page'} />
                </Button>
            </Card>
        </div>
    );
}

export default ErrorPage;
