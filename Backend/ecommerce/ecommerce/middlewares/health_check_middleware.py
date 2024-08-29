from django.http import JsonResponse


class HealthCheckMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path == '/' or request.path == '':
            return JsonResponse({
                'status': 'ok',
                'message': 'Welcome to E commerce Backend Service!'
            })

        return self.get_response(request)