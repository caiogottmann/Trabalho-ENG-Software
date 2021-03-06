// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class TESTE05EditarEmailTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void tESTE05EditarEmail() {
    driver.get("http://localhost:8080/email");
    {
      List<WebElement> elements = driver.findElements(By.cssSelector("h1"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.cssSelector(".dashButton"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.id("__BVID__20"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.cssSelector(".tableBodyTr:nth-child(1) .bi-pencil-square path:nth-child(1)"));
      assert(elements.size() > 0);
    }
    driver.findElement(By.cssSelector(".tableBodyTr:nth-child(1) .bi-pencil-square path:nth-child(1)")).click();
    {
      List<WebElement> elements = driver.findElements(By.id("modalOccupationArea___BV_modal_header_"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.xpath("//div[@id=\'modalOccupationArea___BV_modal_body_\']/form/div/input"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.xpath("//div[@id=\'modalOccupationArea___BV_modal_body_\']/form/div[2]/input"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.cssSelector("#modalOccupationArea___BV_modal_footer_ > .btn-secondary"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.cssSelector(".btn:nth-child(2)"));
      assert(elements.size() > 0);
    }
    driver.findElement(By.xpath("//div[@id=\'modalOccupationArea___BV_modal_body_\']/form/div/input")).sendKeys("");
    driver.findElement(By.cssSelector(".btn:nth-child(2)")).click();
    driver.findElement(By.xpath("//div[@id=\'modalOccupationArea___BV_modal_body_\']/form/div/input")).sendKeys("Nome do usuario");
    driver.findElement(By.cssSelector(".btn:nth-child(2)")).click();
    {
      List<WebElement> elements = driver.findElements(By.id("popup"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.cssSelector("#popup > img"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.cssSelector("#popup > p"));
      assert(elements.size() > 0);
    }
    {
      List<WebElement> elements = driver.findElements(By.cssSelector("#popup > #botao"));
      assert(elements.size() > 0);
    }
    driver.findElement(By.cssSelector("#popup > #botao")).click();
    {
      List<WebElement> elements = driver.findElements(By.cssSelector(".tableBodyTr:nth-child(1)"));
      assert(elements.size() > 0);
    }
  }
}
