using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WeatherForecastApp.Models;
using WeatherForecastApp.Services;

namespace WeatherForecastApp.Pages;

public class IndexModel : PageModel
{
    private readonly WeatherForecastService _weatherService;

    public IndexModel(WeatherForecastService weatherService)
    {
        _weatherService = weatherService;
    }

    public IEnumerable<WeatherForecast> WeatherForecasts { get; set; } = Array.Empty<WeatherForecast>();

    public void OnGet()
    {
        WeatherForecasts = _weatherService.GetWeekForecast();
    }
}
